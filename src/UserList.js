import './userlist.css'

function UserList({ children }) {
    return (
        <div className='user-list'>
            {children}
        </div>
    );
};

export { UserList };