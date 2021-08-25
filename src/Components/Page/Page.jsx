import React from 'react';
import {Text} from '../Text/Text';
import {arrayObjectPage} from '../Base/arrayObjectPage';

export function Page (props) {
    const match = props.match.path.substr(1);
    const matchObject = arrayObjectPage.find((elem) => elem.name === match);
    const Description = () => matchObject.description.map((elem, index) => <Text key={index} description={elem} />);

    return(
        <article className="article">
            <h1 className="article__title">{matchObject.header}</h1>
            <Description />
        </article>
    )
}
