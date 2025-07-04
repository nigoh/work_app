import React from 'react';
import {
  Box,
  Container,
  Divider,
  useTheme,
} from '@mui/material';
import { EnhancedExpenseList } from './EnhancedExpenseList';
import { PageTitle, BodyText } from '../../components/ui/Typography';
import { spacingTokens } from '../../theme/designSystem';

/**
 * 経費管理メインページコンポーネント
 */
export const ExpenseRegister: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      height: '100vh', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* スクロール可能なコンテンツエリア */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'auto',
        py: spacingTokens.sm,
      }}>
        <Container maxWidth="xl" sx={{ height: '100%', py: 0 }}>
          {/* コンパクトなヘッダー */}
          <Box sx={{ mb: spacingTokens.md, textAlign: 'center' }}>
            <PageTitle 
              sx={{ 
                mb: spacingTokens.xs,
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: { xs: '1.75rem', sm: '2rem' }
              }}
            >
              経費管理
            </PageTitle>
            <Divider sx={{ my: spacingTokens.sm }} />
          </Box>

          {/* 拡張経費一覧 */}
          <Box sx={{ height: 'calc(100vh - 160px)' }}>
            <EnhancedExpenseList />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
