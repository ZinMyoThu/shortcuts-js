import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Make Rich Text from HTML
 * @section Content Types > Text > Rich Text
 * @icon RichText
 *
 * Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * makeRichTextFromHTML();
 * ```
 */

const makeRichTextFromHTML = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfromhtml',
  WFWorkflowActionParameters: {},
});

export default makeRichTextFromHTML;
