
import { DocumentRenderer } from "@keystone-6/document-renderer";
// import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks';
// import { componentBlocks } from '../../../cms/component-blocks/component-blocks'
import Quote from "../../shared-components/quote";

const componentBlockRenderers = {
  // Add a custom renderer for quote component blocks
  quote: props => {
    return (
      <Quote attribution={props.attribution} content={props.content} />
    )
  },
}

const Post = ({ post }) => {
  let { title, intro, publishedDate, status, body } = post;

  return (<li>
    <h2>{title}</h2>
    <p>{intro}</p>
    <p>{publishedDate}</p>
    <p>{status}</p>
    <DocumentRenderer document={body.document} componentBlocks={componentBlockRenderers} />
  </li>);

}
export default Post;
