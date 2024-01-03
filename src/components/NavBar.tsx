import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/icon.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
	return (
		<HStack justifyContent='space-between' padding='10px 20px'>
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
