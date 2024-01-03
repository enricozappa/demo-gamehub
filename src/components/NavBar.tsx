import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/icon.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
	return (
		<HStack>
			<Image
				src={logo}
				boxSize='60px'
				borderRadius='10px'
				margin='10px'
			></Image>
			<ColorModeSwitch />
		</HStack>
	);
}

export default NavBar;
