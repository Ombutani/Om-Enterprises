import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber === 'IE123456789') {
      setShowDemo(true);
    }
  };

  const trackingSteps = [
    {
      status: 'Completed',
      date: '2024-03-15',
      location: 'Origin Port',
      description: 'Container loaded and sealed'
    },
    {
      status: 'Completed',
      date: '2024-03-16',
      location: 'In Transit',
      description: 'Vessel departed from origin port'
    },
    {
      status: 'Active',
      date: '2024-03-18',
      location: 'At Sea',
      description: 'Container in transit to destination'
    },
    {
      status: 'Pending',
      date: '2024-03-20',
      location: 'Destination Port',
      description: 'Scheduled arrival at destination'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Track Your Shipment
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Monitor your cargo's journey in real-time with our advanced tracking system
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="Enter tracking number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </Button>
                </div>
              </form>

              {!showDemo && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Try demo tracking number: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">IE123456789</span>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {showDemo && (
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Tracking Details for: {trackingNumber}
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Container: MSKU123456789</span>
                  <span>Vessel: MSC AURORA</span>
                  <span>Service: Ocean Freight</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                        step.status === 'Completed' ? 'bg-green-500' :
                        step.status === 'Active' ? 'bg-blue-500' :
                        'bg-gray-300 dark:bg-gray-600'
                      }`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{step.location}</h4>
                          <span className="text-sm text-gray-500">{step.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
