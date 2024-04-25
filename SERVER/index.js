const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors= require('cors')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// mongodb


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:shiven09@cluster0.tzsesgy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const bookCollection=client.db("BookInventory").collection("books");

    app.post("/upload-book",async(req,res)=>{
        const data=req.body;
        const result=await bookCollection.insertOne(data);
        res.send(result);
    })
    

    app.patch("/book/:id",async(req,res)=>
    {
        const id=req.params.id;
        console.log(id);
        const updateBookData= req.body;
        const filter = {_id: new ObjectId(id)};
        const options ={upsert:true};
        
        const updateDoc= {
          $set: {
            ...updateBookData
          }
        }
        const result = await bookCollection.updateOne(filter,updateDoc,options);
        res.send(result);


    })

    app.delete("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:  ObjectId(id)};
        const result= await bookCollection.deleteOne(filter);
        res.send(result);
    })
    app.get("/all-books",async(req,res)=>{
      let query={};
      if(req.query?.category){
        query={category:req.query.category}

      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
      
    })
    

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})