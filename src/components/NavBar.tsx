import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/icon.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
	return (
		<HStack padding='10px 20px'>
			<Image
				src={logo}
				boxSize='60px'
				borderRadius='10px'
				margin='10px'
			></Image>
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
}

export default NavBar;
