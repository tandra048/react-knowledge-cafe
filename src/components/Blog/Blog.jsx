import Proptypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

Blog.proptypes = {
    blog: Proptypes.object.isRequired
}

export default Blog;