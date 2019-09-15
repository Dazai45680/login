
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://khaled:saadsaad@cluster0-frwjr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let d_b ;
client.connect(err => {
  d_b = client.db("test");
  // perform actions on the collection object
});


module.exports  = class DB { 
    
    db(req , res){
        if(req.url === '/signin'){
            req.on('data' , function(data){

                let body = JSON.parse(data);
                d_b.collection('users').findOne({email:body.email , pass:body.pass} , (err , result)=>{
                    let x = body.email;
                     console.log(x.substr(x.length - 10));
                    if(result === null){
                        res.end(JSON.stringify('there is no such email'));
                    }else if(err != null){
                        res.end(JSON.stringify(err));
                    }else if(result !== null){
                        res.send(JSON.stringify(body.email));
                        
                        res.end(JSON.stringify('u have logged in successfully'));

                    }
                });
            });
        }

        if(req.url === '/signup'){
            req.on('data' , function(data){

                let body = JSON.parse(data);
                d_b.collection('users').findOne({email:body.email } , (err , result)=>{
                    if(result !== null){
                        res.end(JSON.stringify('there is same email address'));
                    }else if(err != null){
                        res.end(JSON.stringify(err));
                    }else if(result === null){
                        let gmail = body.email.substr(body.email.length - 10);
                        let yahoo = body.email.substr(body.email.length - 10);
                        if( gmail === '@gmail.com' || yahoo === '@yahoo.com'){
                            d_b.collection('users').insertOne(body , (err , rese)=>{
                                res.send('u have signed up successfully');
                                res.end();
                                console.log('res is ended');
                                
                            });
                        }else{
                            res.end('this is not a true email'); 
                        }
                    }
                });
                
            });
        }

    }

}