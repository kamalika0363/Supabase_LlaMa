// import React, { useState, useEffect } from 'react';
// import { createClient } from '@/utils/supabase/client';
// import {Card} from "@/components/ui/card";
//
// interface GroupCardProps {
//     onSelectGroup: (groupName: string) => void;
// }
//
// const GroupCard: React.FC<GroupCardProps> = ({ onSelectGroup }) => {
//     const [groupName, setGroupName] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const [groups, setGroups] = useState<any[]>([]);
//     const supabase = createClient();
//
//     useEffect(() => {
//         fetchData();
//     }, []);
//
//     const fetchData = async () => {
//         try {
//             const { data, error } = await supabase.from('groups').select('id, name');
//
//             if (error) {
//                 console.error('Error fetching data:', error);
//             } else {
//                 setGroups(data || []);
//             }
//         } catch (error) {
//             console.error('Error getting data:', error);
//         }
//     };
//
//     const handleCreateGroup = async () => {
//         try {
//             if (!groupName.trim()) {
//                 setError('Group name cannot be empty');
//                 return;
//             }
//
//             const { data, error } = await supabase.from('groups').upsert([
//                 { name: groupName.trim() },
//             ]);
//
//             if (error) {
//                 console.error('Error creating group:', error);
//                 setError('Error creating group');
//             } else {
//                 console.log('Group created successfully:', data);
//                 setGroupName('');
//                 setError(null);
//                 await fetchData();
//             }
//         } catch (error) {
//             console.error('Error creating group:', error);
//             setError('Error creating group');
//         }
//     };
//
//     const handleGroupClick = (group: string) => {
//         onSelectGroup(group);
//     };
//
//     return (
//         <Card>
//         <div className="flex flex-col justify-center items-center gap-4">
//             <div className="flex flex-row gap-4">
//                 <input
//                     className="text-black text-center rounded-xl p-2 pl-5 w-full border-2 border-[#3a3a3a] bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] font-semibold"
//                     type="text"
//                     placeholder="Enter group name"
//                     id="groupName"
//                     value={groupName}
//                     onChange={(e) => setGroupName(e.target.value)}
//                 />
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button onClick={handleCreateGroup}>
//                     <img src="Icon.svg" alt="Add" className="mt-2" />
//                 </button>
//             </div>
//
//             <div className="flex flex-col mt-5">
//                 {groups.map((group) => (
//                     <div
//                         key={group.id}
//                         style={{ margin: '0 10px', cursor: 'pointer' }}
//                         onClick={() => handleGroupClick(group.name)}
//                     >
//                         <p className="border-2 border-[#3a3a3a] bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] m-1 rounded-lg p-2 text-center">{group.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </Card>
//     );
// };
//
// export default GroupCard;
