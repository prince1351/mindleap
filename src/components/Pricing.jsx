import { li } from "framer-motion/client"

const packages = [
  {
    name: 'Bronze Package',
    price: '$99',
    description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
    ],
  },
  {
    name: 'Silver Package',
    price: '$199',
    description: 'A great choice for growing businesses with additional features and support for mental wellness.',
    features: [
      'All Bronze Package features',
      'Monthly guided meditation sessions',
      'Personalized wellness plan',
      'Access to expert webinars',
    ],
  },
  {
    name: 'Gold Package',
    price: '$299',
    description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
    features: [
      'All Silver Package features',
      'Weekly one-on-one coaching sessions',
      'Advanced mental wellness tracking tools',
      '24/7 access to mental wellness experts',
    ],
  },
]

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
         top: targetElement.offsetTop,
                behavior: 'smooth',
      })
    }
  }


  return (
    <div id="pricing" className="pt-32 bg-[#f7f8fc]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">Perfect for Small & Large Brands</h2>
          <p className="text-lg mb-12 md:w-4/5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit, reiciendis esse provident nisi iure.</p>
        </div>

        {/* Packages */}
        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12">
           {
            packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex-1 shadow-lg">
                   <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                   <hr className="w-24 border text-primary border-primary" />
                   <p className="text-3xl font-bold mb-4">{pkg.price} <span className="text-lg font-normal">/mo</span></p>
                   <p className="text-sm  mb-4">{pkg.description}</p>
                   <ul className="list-disc list-inside space-y-2 mb-6">
                    {
                      pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))
                    }
                   </ul>
                   <button onClick={handleScrollToContact} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Get Started</button>
              </div>
            ))
           }
        </div>
      </div>
      </div>
  )
}

export default Pricing