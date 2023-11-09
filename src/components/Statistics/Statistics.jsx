import {
  StatisticsWrap,
  Title,
  StatList,
  StatItem,
  Percentage,
} from './Statistics.styled';

const getRandomHexColor = idx =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id} color={getRandomHexColor()}>
            <span>{item.label}</span>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrap>
  );
};
