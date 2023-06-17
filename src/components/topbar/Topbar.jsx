import "./Topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Papschulo.</a>
                <div className="itemContainer">
                  <PersonIcon className="icon"/>
                  <span>+254704223079</span>
                
                  
                </div>
                <div className="itemContainer">
               < MailOutlineIcon className="icon"/>
                  <span>munorusam10@gmail.com</span>
                
                  
                </div>
            </div>
            
            <div className="right"></div>
         

        </div>



    </div>
  )
}
