import './App.css';

function Index() {
    const obj = [
        {
            id: 1,
            name: 'Account 1',
            created_on: '5-8-2021',
            owner: 'User 1',
        },
        {
            id: 2,
            name: 'Account 2',
            created_on: '5-8-2021',
            owner: 'User 2',
        },
        {
            id: 3,
            name: 'Account 3',
            created_on: '5-8-2021',
            owner: 'User 3',
        }
    ];
  return (
    <div className="App">
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created On</th>
            <th>Owner</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {obj.map((ob) =>  
            <tr>
                <td>{ob.id}</td>
                <td>{ob.name}</td>
                <td>{ob.created_on}</td>
                <td>{ob.owner}</td>
                <td><a href="/view">View</a></td>
            </tr>
        )}
    </tbody>
</table>
    </div>
  );
}

export default Index;