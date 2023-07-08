import * as S from './styles';

import { Layout } from '@components/Layout';
import { siteConfig } from '@/config';
import Container from '@components/Containers/Container';

export const Footer = () => {
  return (
    <Layout>
      <Container>
        <S.Content>
          <S.Section role="contentinfo">
            <p>{siteConfig.title}</p>
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reseverdos © Junior Alves{' '}
            {new Date().getFullYear()}
          </S.Copyright>
        </S.CopyrightContainer>
      </Container>
    </Layout>
  );
};
