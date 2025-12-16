import { LinkWrapper, LinkItem } from "../components/utils/linktree";

export default function LinkTree() {
  return (
    <div className="pt-28 min-h-screen mb-10">
        <LinkWrapper>
            <LinkItem title="Whatsapp"/>
            <LinkItem title="Instagram"/>
            <LinkItem title="Tiktok"/>
            <LinkItem title="Shopee"/>
        </LinkWrapper>
    </div>
  );
}