import { Container } from './style';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function NoData({
	iconSize,
	textSize,
	text,
}: {
	iconSize: number;
	textSize: number;
	text: string;
}) {
	return (
		<Container>
			<SentimentSatisfiedAltIcon style={{ fontSize: iconSize }} />
			<p style={{ fontSize: textSize }}>{text}</p>
		</Container>
	);
}
