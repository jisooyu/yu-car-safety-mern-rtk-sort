import Button from '../../components/Button';
import { logout } from '../../services/auth';
function GoogleLogoutButton() {
	const handleLogout = () => {
		logout();
	};
	return (
		<div>
			<Button
				className='text-blue-700
				hover:cursor-pointer warning m-2'
				onClick={handleLogout}
				rounded
				warning
			>
				Logout
			</Button>
		</div>
	);
}

export default GoogleLogoutButton;
