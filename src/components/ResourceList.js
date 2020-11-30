import React, { useState, useEffect} from 'react';
import axios from 'axios';

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }
 
//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if(prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resources.map(resource => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     )
//   }
// }

const ResourceList = ({resourceName}) => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`)
      .then(response => {
        console.log('[useEffect] is running!')
        return setResource(response.data);
      })
      .catch(err => console.log(err));
  }, [resourceName])

  return (
    <ul>
      {resource.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
};

export default ResourceList;
