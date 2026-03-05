import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import IntegrationsContent from '@/components/IntegrationsContent';

export default function IntegrationsPage() {
  return (
    <div>
      <Header />
      <Navigation activePage="Integrations" />
      <IntegrationsContent />
    </div>
  );
}
