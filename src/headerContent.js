import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {useNavigate,useLocation} from "react-router-dom";
import Component2 from './component2';
import {useState} from 'react';
import data from './data';
import {Context} from './context';

const BootstrapButton = styled(Button)({
    padding: '6px 12px',
    border: '1px solid gray',
    lineHeight: 1.5,
    backgroundColor: "white",
    color:"black",
    '&:hover': {
      backgroundColor: 'black',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:"white",
    },
  });

  
  const Headercomponent = (props) => {
        const location=useLocation();
        const navigateto=useNavigate();
        const [count,setCount]=useState(0);
        const productItems=[...data];
        const [cartItems,setCartItems]=useState([]);  

        const toggle = async (e,id) =>{
       
            if(e.target.textContent === "Add to cart"){
                console.log(location);
                e.preventDefault();
                setCount(count+1)
                e.target.textContent = "Remove from cart";
                const c=productItems.filter((item)=>id === item.id );
                setCartItems([...cartItems,c])
            }
            else if(e.target.textContent === "Remove from cart"){
              setCount(count-1)
              e.target.textContent = "Add to cart";
            }
            
          }

    return(
        <>
            <div>
                <div style={{display:"flex",position:"sticky",top:"0px",backgroundColor:"white",padding:"10px"}}>
                    <h2>Shop Bootstrap</h2>
                    <div style={{padding:"25px"}}>
                        <span> <a href="#" style={{textDecoration:"none"}}>Home</a></span> &nbsp;
                        <span> <a href="#" style={{textDecoration:"none"}}>About</a></span> &nbsp;
                        <span> <a href="#" style={{textDecoration:"none"}}>Shop{" "}<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a></span>  &nbsp;
                    </div>
                    <div style={{width:"65%",padding:"25px"}}>
                        <BootstrapButton variant="contained" disableRipple style={{float:"right"}} onClick={()=>navigateto('cart',{state:{cartItems}})}>
                            Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> &nbsp;
                            <span style={{color:'white',background:'black',width:"20px",borderRadius:"50%"}}>{count}</span>
                        </BootstrapButton>
                    </div>
                </div>
                <Component2 count={count} toggle={toggle}/>
            </div>
        </>        
    )
}

export default Headercomponent;