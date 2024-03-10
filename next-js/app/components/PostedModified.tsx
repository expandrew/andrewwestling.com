export const PostedModified = ({
  posted,
  modified,
}: {
  posted: string;
  modified: string;
}) => (
  <>
    <p className="text-sm text-muted dark:text-muted-dark mb-0">
      Originally posted: {posted}
    </p>
    <p className="text-sm text-muted dark:text-muted-dark mb-0">
      Last updated: {modified}
    </p>
  </>
);
