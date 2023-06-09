import React, { useContext, useState } from 'react';
import Sidebar from './Sidebar';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
const axios = require('axios').default;
const AddBook = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const [imageURL, setImageURL] = useState(null)
        const handleImage = (e) => {
            const imageData = new FormData();
            imageData.set('key','d4ab1958944a689da2ede6dfed4448c8')
            imageData.append('image',e.target.files[0])
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageURL(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });

        }
        const history = useHistory()
        const onSubmit = data => {
           
            const books = {
                name: data.name,
                author: data.author,
                price: data.price,
                imageURL : imageURL,
                quantity:1
            }
           if(imageURL){
            fetch('https://boighor.herokuapp.com/admin/AddBook',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(books)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                history.push('/admin/ManageBook')
            })
           }
           else(alert('Uploading Photo Please Wait'))
           
        };
        const customImage = {
                border: '1px solid #293845',
                padding: '5px 20px',
                borderRadius: '5px',
                background: '#2938454d',
                cursor: 'pointer'
            }
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-3">
                       <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                       <div className="px-5">
                       <div className="mt-2">
                            <h2>Add Book</h2>
                        </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mt-3">
                        <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Book Name</strong></label>
                            <input className="form-control" name="name" placeholder="book Name" ref={register({ required: true })} />
                             {errors.name && <small>This field is required</small>}
                            </div>
                            <br/>
                            <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Author</strong></label>
                            <input type="text" className="form-control" name="author"  ref={register({ required: true })} />
                             {errors.author && <small>This field is required</small>}
                            </div>
                            <br/>
                            <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Price</strong></label>
                            <input type="number" className="form-control" name="price" placeholder="book Price" ref={register({ required: true })} />
                             {errors.price && <small>This field is required</small>}
                            </div>
                            <div className="col-md-6 my-3">
                            <label  htmlFor=""><strong>Photo</strong></label>
                            <br/>
                            <label style={customImage} htmlFor="image" id="custom-image" ><strong><FontAwesomeIcon icon={faCloudUploadAlt} /> Click To  Upload</strong></label>
                            {imageURL && <strong>Photo Uploaded</strong>}
                            <br/>
                            <input onChange={handleImage} type="file" id="image" className="form-control" name="image" ref={register({ required: true })} hidden/>
                             {errors.image && <small>This field is required</small>}
                            </div>
                        </div>
                         <input  className="btn btn-dark" type="submit" value="Add"/>
                    </form>
              
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBook;