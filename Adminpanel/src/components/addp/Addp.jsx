import React, { useState } from 'react'
import Upload from '../../assets/upload_area.svg'
const Addp = () => {
    const [image,setimage]=useState();
    const [Product,setProduct]=useState({
        name:"",
        category:"men",
        old_price:"",
        new_price:"",
        image:""
    })
    const imagehandler=(e)=>{
            setimage(e.target.files[0]);  
    }
    const addphandler=(e)=>{
        setProduct({...Product,[e.target.name]:e.target.value});
    }
    const addproduct= async ()=>{
          let addprod=Product;
          let respdata;
           let formdata=new FormData();
           formdata.append('product',image);
           await fetch('http://localhost:4000/uploads',{
                 method:'POST',
                 headers:{
                    Accept:'application/json'
                 },
                 body:formdata
           }).then((resp)=>resp.json()).then((data)=>{respdata=data}).catch((err)=>{console.log('error',err)});
           if(respdata.success)
            {
                addprod.image=respdata.image_url;
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Active:'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(addprod)
                }).then((resp)=>resp.json()).then((data)=>{console.log(data)});
            }
            alert('Product added successfully')
            console.log(addprod);
    }
    
  return (
    <div>
      <div className="product">
        <div className="name">
            <p>Product Name</p>
            <input onChange={addphandler} type="text" name="name" placeholder='Type here' />
        </div>
        <div className="price">
            <div className="old">
                <p>Old Price</p>
                <input type="text" onChange={addphandler} name='old_price' placeholder='Type here' />
            </div>
            <div className="new">
                <p>New Price</p>
                <input type="text" onChange={addphandler} name='new_price' placeholder='Type here' />
            </div>
        </div>
        <div className="cat">
        <p>Category</p>
            <select name="category" onChange={addphandler} id="category">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="image">
        <label htmlFor="image">
        <img src={image?URL.createObjectURL(image):Upload} alt=""  />
        </label>
             <input onChange={imagehandler}  type="file"  name="image" id="image" hidden />
        </div>
        <button className='Addpro' onClick={addproduct}>Add</button>
        
      </div>
    </div>
  )
}

export default Addp
