import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CreateCollectionContent from '@/components/CreateCollectionContent';

export default function CreateCollectionPage() {
  return (
    <div>
      <Header />
      <Navigation activePage="Integrations" />
      <CreateCollectionContent />
    </div>
  );
}
