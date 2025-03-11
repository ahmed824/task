// components/shared/icons.js
import { FaUser, FaMapMarkerAlt, FaCity, FaFlag, FaEnvelope, FaLocationArrow } from "react-icons/fa";

export const iconMap = {
  siteTitle: <FaLocationArrow className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
  name: <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
  streetAddress: <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
  city: <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
  postalCode: <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
  country: <FaFlag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />,
};