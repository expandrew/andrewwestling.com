import resumeHtml from "./resume.html";

export const ResumeHtml = () => (
  <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
);
