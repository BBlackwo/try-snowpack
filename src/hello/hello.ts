import moment from 'https://cdn.skypack.dev/moment';

const template = /*html*/`
<h1>Hello Snowpack!</h1>
${moment().format()}
`;

export default template;