const port=4000;
const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const cors=require('cors');
const multer=require('multer');
const path=require('path');
const { type } = require('os');
const { error } = require('console');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://ycharankumar123:Jym5ZwzfkFl4l2QB@cluster0.afr9xxr.mongodb.net/Ckymart");
app.get("/",(req,res)=>{
    res.send('hi! Good Evening');
})
const storage=multer.diskStorage({
    destination:'./uploads/Images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage});
app.use(express.static('uploads'));
app.post('/uploads',upload.single('product'),(req,res)=>{
   
    res.json({
        success:1,
        image_url:`http://localhost:${port}/Images/${req.file.filename}`
    })
})
const Product=mongoose.model('Product',{
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    id:{
         type:Number,
         required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
});
app.post('/addproduct', async (req,res)=>{
    let prdts=await Product.find({});
    let id;
    if(prdts.length>0)
        id=prdts.slice(-1)[0].id+1;
        else
    id=0;
    const newproduct=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
        date:req.body.date,
    });
    console.log(newproduct);
    await newproduct.save();
    res.json({
        success:true,
        name:req.body.name
    })
    console.log('Saved');
});
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    res.json({
        success:true,
    })
})
app.get('/allproducts', async (req,res)=>{
    let allproducts=await Product.find({});
    res.send(allproducts);
})
const User=mongoose.model('User',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartdata:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now()
    }
});
app.post('/signup',async(req,res)=>{
           console.log('hi');
           const check=await User.findOne({email:req.body.email});
           console.log('signup');
           if(check)
            {
               return res.status(400).json({
                success:false,
                error:"Already have a User with this Mail Id"
               })
            }
            let cart={};
            for(let i=0;i<300;i++)
                {
                    cart[i]=0;
                }
            const user=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cartdata:cart
            });
            await user.save();
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'CkyMart-Secret-Code');
            res.status(200).json({
                success:true,
                token:token
            });
});
app.post('/login',async (req,res)=>{
   let user=await User.findOne({email:req.body.email});
   
   if(user)
    {
        if(user.password===req.body.password)
        {  console.log('login',req.body);
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'CkyMart-Secret-Code');
            res.status(200).json({
                success:true,
                token:token});
        }
        else{
            res.json({success:false,
                error:"incorrect password"
            }
            )
        }
    }
    else{
        res.json({
            success:false,
            error:"incorrect mail id"
        })
    }
});
app.listen(4000,(err)=>{
    if(err){
        console.log("error:",err);
    }
    else{
        console.log("Server started");
    }
});