import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Location () {
    return ( 
        <div className="container mx-auto p-6">
        <section className="bg-white p-10 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">📍 Location and Directions</h2>
  
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg text-gray-600">The Grand Plaza</p>
              <p className="text-lg text-gray-600">1234 Main Street,</p>
              <p className="text-lg text-gray-600">Metropolis, Country</p>
            </div>
          </div>
  
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Getting Here</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-gray-800">By Car</h4>
                <p className="text-gray-600"><strong>From Downtown:</strong> Head north on Main Street. Continue straight for 2 miles. The Grand Plaza will be on your right.</p>
                <p className="text-gray-600"><strong>From the Airport:</strong> Take the airport exit towards Highway 1. Merge onto Highway 1 and take Exit 12 for Main Street. Turn left onto Main Street and continue for 3 miles. The Grand Plaza will be on your left.</p>
              </div>
  
              <div>
                <h4 className="text-xl font-medium text-gray-800">By Public Transportation</h4>
                <p className="text-gray-600"><strong>Bus:</strong> Take Bus Route 15 and get off at the Main Street Stop. The Grand Plaza is a 5-minute walk from the bus stop.</p>
                <p className="text-gray-600"><strong>Subway:</strong> Take the Blue Line to the Metropolis Central Station. From there, it’s a 10-minute walk to The Grand Plaza.</p>
              </div>
            </div>
          </div>
  
          <div className="h-64 rounded-xl overflow-hidden shadow-inner">
            <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[40.7128, -74.0060]}>
                <Popup>
                  The Grand Plaza<br />1234 Main Street, Metropolis.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </div>
     );
}

export default Location ;