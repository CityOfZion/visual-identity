import { h, Component } from 'preact';

import BlockGrid from '../BlockGrid';

import style from './style';

const ProjectList = ( props ) => {
  const { list } = props;

  const listItems = list.map((item) =>
    <div class={ style.projectList }>
      <a href={ item.target }>
        <img
          alt={ item.thumbnail.alt }
          class={ style.thumbnail }
          src={ item.thumbnail.src }
        />
      </a>

      <h2>{ item.heading }</h2>
      <p>{ item.description }</p>

      <a href={ item.target } class={ style.target }>
        { item.link }
      </a>
    </div>
  );

  return (
    <BlockGrid items={ listItems } />
  )
};

ProjectList.defaultProps = {
  list: [],
}

export default ProjectList;
