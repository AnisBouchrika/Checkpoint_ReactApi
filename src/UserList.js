import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
import {Table} from 'react-bootstrap'



const UserList=()=> {
const [posts, setPosts]=useState([])

const getPosts = async () => {
  try {

    const userPosts = await axios.get("https://jsonplaceholder.typicode.com/users")  
    setPosts(userPosts.data);  // set State
  
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{
    getPosts()
},[]) 
 // includes empty dependency array
return (
     <div>
    <Table striped bordered hover>

      <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street Address</th>
            <th>City</th>
            <th>Website</th>
            <th>Company name</th>
        </tr>
        </thead>

        <tbody>
        {
        posts.map((post,i)=>(
  
        <tr key={i}>
            <td>{post.id}</td>
            <td> {post.name}</td>
            <td>{post.username}</td>
            <td>{post.email}</td>
            <td>{post.email}</td>
            <td>{post.phone}</td>
            
            <td>{post.address.street}</td>
            <td>{post.address.city}</td>
            <td>{post.website}</td> 
            <td> {post.company.name}</td>

        </tr>
         
      ))}
            </tbody>

    </Table>
  </div>
 );
 }
{/* <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Street Address</th>
      <th>City</th>
      <th>Website</th>
      <th>Company name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{post.id}</td>
      <td> {post.name}</td>
      <td>{post.username}</td>
      <td>{post.email}</td>
      <td>{post.phone}</td>
      <td>{post.email}</td>
      <td>{post.address.street}</td>
      <td>{post.address.city}</td>
      <td>{post.website}</td> 
      <td> {post.company.name}</td>

    </tr>
  </tbody>
</Table> */}
export default UserList;