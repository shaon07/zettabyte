"use client";
import Error from "@/components/atoms/error";
import Loader from "@/components/atoms/loader";
import UserListTable from "@/components/modules/users/user-list-table";
import { useUsers } from "@/hooks/use-users";
import { motion } from "framer-motion";

export default function UsersContainer() {
  const { data: users, isLoading, error } = useUsers();

  return (
    <>
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600">
              Manage user accounts and information
            </p>
          </div>
        </motion.div>

        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-64"
          >
            <Loader />
          </motion.div>
        ) : error ? (
          <Error error={error} />
        ) : (
          <UserListTable users={users} />
        )}
      </div>
    </>
  );
}
