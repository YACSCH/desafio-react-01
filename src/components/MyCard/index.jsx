import Card from 'react-bootstrap/Card';
import Tags from '../Tags'


const MyCard = ({ img, name, description, color, title }) => {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ img } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>{ description}</Card.Text>
      </Card.Body>   
      <Tags color={ color } title={ title } />
    </Card>
  )
}

export default MyCard;