import Card from "@/components/atoms/card";
import Modal from "@/components/atoms/modal";
import UserRow from "@/components/molecules/user-row";
import { User } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalCard from "./modal-card";

const tableContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

interface UserListTableProps {
  users: User[] | null;
}

export default function UserListTable({ users }: UserListTableProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (!users) {
    return <Card className="text-center text-black">Empty table</Card>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <motion.thead
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50"
              >
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                </tr>
              </motion.thead>

              <motion.tbody
                variants={tableContainerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white divide-y divide-gray-200"
              >
                {users?.map((user, index) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    index={index}
                    onClick={() => setSelectedUser(user)}
                  />
                ))}
              </motion.tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      <Modal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        title="User Details"
      >
        {selectedUser && <ModalCard selectedUser={selectedUser} />}
      </Modal>
    </>
  );
}
