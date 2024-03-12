import profile from '../../assets/image/profile.png';

const Header = () => {
    return (
        <div className='fllex flex-row justify-between items-center p-4 mx-4 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
             <img src={profile}></img>
        </div>
    );
};

export default Header;