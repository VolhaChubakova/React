import SortControl from './SortControl';

const SortControlInfo = {
    component: SortControl,
    title: 'SortControl',
    tags: ['autodocs']
};
export default SortControlInfo;

export const Default = {
    args: {
        options: ['RELEASE DATE', 'TITLE'],
        defaultValue:'TITLE',
        onChange: ()=>{}
    }
};
