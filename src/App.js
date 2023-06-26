import { Container, Grid } from '@mui/material';
import './App.css';
import SideBar from './SideBar';
import ContentPage from './ContentPage';

function App() {
  return (
    <Container>

      <Grid 
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
  
      >
        <Grid item lg={3} >        
          <SideBar />
        </Grid>

        <Grid item lg={7} >        
          <ContentPage />
        </Grid>

      </Grid>
      </Container>

  );
}

export default App;
