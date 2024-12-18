import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

export default function ProgressCount({ progress }) {
  const { value } = useCountUp({
    isCounting: true,
    duration: 5,
    easing: 'linear',
    start: 0,
    end: progress,
    onComplete: () => ({
      shouldRepeat: false,
      delay: 5,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      value={Number(value!)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
      }}
    >
      <Typography
        level="body-xs"
        textColor="common.white"
        sx={{ fontWeight: 'xl', mixBlendMode: 'difference' }}
      >
        LOADING… {`${Math.round(Number(value!))}%`}
      </Typography>
    </LinearProgress>
  );
}
