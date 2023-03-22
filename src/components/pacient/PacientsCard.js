import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import data from '../dummies/ListData.json';
import './pacientsCard.css';
function PacientsCard({ input, pacients }) {
  const filteredData =
    pacients &&
    pacients.filter((el) => {
      if (input === '') {
        return el;
      }
      return el.name.toLowerCase().includes(input);
    });

  if (filteredData === null || filteredData.length === 0) {
    return <h1> Não existe pacientes cadastrados</h1>;
  }

  return (
    <>
      {filteredData.map((item, key) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
          <div
            onClick={(e) => {
              console.log(item.name);
            }}
            className="scroll-container-pacient"
            key={item.id}
          >
            {item.name}
            <p className="record-info" key={item.id}>
              {item.age} anos
            </p>
            <p className="record-info" key={item.id}>
              Objetivo: {item.goal}
            </p>
          </div>
        </Grid>
      ))}
    </>
  );
}

export default PacientsCard;
