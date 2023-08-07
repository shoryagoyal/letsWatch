import { useParams } from 'react-router-dom';

function People() {
    const { peopleId } = useParams();
    return <div>People</div>;
}

export default People;
