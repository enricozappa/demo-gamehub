import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/icon.png';

function NavBar() {
	return (
		<HStack>
			<Image
				src={logo}
				boxSize='60px'
				borderRadius='10px'
				margin='10px'
			></Image>
			<Text>NavBar</Text>
		</HStack>
	);
}

export default NavBar;
