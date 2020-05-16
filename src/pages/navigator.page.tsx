import * as React from 'react';
import NavBarComponent from '../components/NavBar/navBar.component';
import AppBarWrapperComponent from '../components/AppBarWrapper/appBarWrapper.component';

const NavigatorComponent:React.FC = ()=>{
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return(
    <div style={{ display: "flex" }}>
      <AppBarWrapperComponent handleDrawerOpen={handleDrawerOpen} open={open}/>
      <NavBarComponent handleDrawerClose={handleDrawerClose} open={open}/>
    </div>
  )
}

export default NavigatorComponent;