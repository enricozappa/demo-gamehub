import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

function CriticScore({ score }: Props) {
	const color = score <= 60 ? 'yellow' : 'green';

	return (
		<Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={4}>
			{score}
		</Badge>
	);
}

export default CriticScore;
