import { h, Component } from 'preact';

import BlockGrid from '../../components/BlockGrid';
import ContentWrapper from '../../components/ContentWrapper';
import Title from '../../components/Title';

import style from './style';

const Resources = ( props ) => {
  const {
  } = props;

  return (
    <div class={ style.resources }>
      <div class={ style.accent } />
      <div class={ style.wrapper }>
        <div class={ style.container }>
          <ContentWrapper narrow>
            <Title>Resources</Title>

            <p class={ style.subtitle }>Anyone can join us to work together or be a source of technical support.</p>

            <BlockGrid size="4" />
          </ContentWrapper>
        </div>
      </div>
    </div>
  )
};

export default Resources;
