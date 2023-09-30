import Badge from 'react-bootstrap/Badge';

const Tags = ({ title, color }) => {

  return   <Badge className='tags'  bg={ color }>{ title }</Badge>
}

export default Tags;