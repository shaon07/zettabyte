import { User } from "@/types";
import { motion } from "framer-motion";

interface ModalCardProps {
  selectedUser: User;
}

export default function ModalCard({ selectedUser }: ModalCardProps) {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-4 mb-6"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
        >
          <span className="text-blue-600 font-medium text-lg">
            {selectedUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </motion.div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedUser.name}
          </h3>
          <p className="text-gray-600">{selectedUser.email}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <div>
          <label className="text-sm font-medium text-gray-500">Phone</label>
          <p className="text-gray-900">{selectedUser.phone}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Website</label>
          <p className="text-gray-900">{selectedUser.website}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Company</label>
          <p className="text-gray-900">{selectedUser.company.name}</p>
          <p className="text-sm text-gray-600">
            {selectedUser.company.catchPhrase}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Address</label>
          <p className="text-gray-900">
            {selectedUser.address.suite} {selectedUser.address.street}
          </p>
          <p className="text-gray-900">
            {selectedUser.address.city}, {selectedUser.address.zipcode}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
