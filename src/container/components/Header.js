
import './Header.css'
import { useNavigate} from 'react-router-dom'
import DATA from './SearchData.json'



export default function Header() {
  const navigate=useNavigate();

  return (
    <div className=' bg p-3 '>
      <h3 className='name '>SOUND Drop....🎧</h3>
       
        <div className='row justify-content-center pt-3 pb-3'  >
            <div className='col-sm-12 col-md-7 col-lg-5 col-xl-5 d-flex'>
                <button className=' btn btn-dark me-4' onClick={()=> navigate('./')}>HOME</button>
                <input
                className='form-control'
                type='search'
                id='search'
                placeholder='Search...'/>
               
         
      
                      
                  
                <button className='btn btn-warning ms-3 p-1'  onClick={()=>navigate('/Cart')}>AddCart</button>
                  
                   </div>
                   {DATA.map((val, key)=>{
                  return(
                      <div  className='search'>
                     {val.tittle}
                      </div>
                  )
                  
           
                 })}
            </div>
        </div>
  )
}
