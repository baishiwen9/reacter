import React, { Component } from 'react';
import Code from './../comp/Code';
import './../comp/common/style.css';


export default class TreeSort extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">二叉树排序</span>
                </p>

                <p className="item-title">
                    <span className="textShadow">概念</span>
                </p>

                <div className="article-desc">
                    树：是一种非线性的数据结构，以分层的方式存储数据。树是由一组以边连接的节点组成。
                    <br />
                    二叉树：是一种特殊的树，子节点不超过两个。
                    <br />
                    二叉查找树：是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。
                </div>

                <div className="article-desc">
                    二叉树的特点：在二叉树上查找，添加，删除元素非常快速
                    <div className="line"></div>
                    <p className="mark">思考点：为什么在二叉树上查找，添加，删除元素非常快速？</p>
                </div>

                <p className="item-title">
                    <span className="textShadow">节点对象类</span>
                </p>

                <Code 
                    code={`
/**
 * Node对象保存数据和其他节点的链接（left和right）
 * @param {*} data 数据
 * @param {*} left 左子节点
 * @param {*} right 右子节点
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    // this.count = 0;
} 

function show() {
    return this.data;
}
                    `}
                />


                <p className="item-title">
                    <span className="textShadow">二叉树类</span>
                </p>
                <Code 
                    code={`
/**
 * 实现二叉查找树类
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.nodeCount = 0;
    this.update = update;
//  this.getNodeCount = getNodeCount; //节点个数
}
                    `}
                />

                <p className="item-title">
                    <span className="textShadow">插入节点</span>
                </p>
                <Code 
                    code={`
/**
 * 插入节点方法
 * 算法：
 *     1. 设根节点为当前节点
 *     2. 如果待插入的节点的值小于当前节点，则设新的节点为原节点的左节点，反之为右节点
 *     3. 如果当前节点的左节点为null，就将新的节点插入该位置，循环退出，反之，继续下一次
 *     4. 设新的当前节点为原节点的右节点
 *     5. 如果当前节点的右节点为null，就将新的节点插入该位置，循环退出，反之，继续下一次
 * @param {*} data 
 */
function insert(data) {
    const node = new Node(data, null, null);
    this.nodeCount += 1;
    if (this.root == null) {
        this.root = node;
    } else {
        let current = this.root;
        let parent;
        const bool = true;
        while(bool) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}
                    `}
                />


                <p className="item-title">      
                    <span className="textShadow">遍历 ==> 中序遍历</span>
                </p>
                <Code 
                    code={`
/**
 * BST遍历之☞中序遍历
 * 中序遍历流程： 左子树 => 根节点 => 右子树
 */
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        window.console.log(node.show());
        inOrder(node.right);
    }
}
                    `}
                />


                <p className="item-title">      
                    <span className="textShadow">遍历 ==> 先序遍历（前序)</span>
                </p>
                <Code 
                    code={`
/**
 * BST遍历之☞先序遍历（前序）
 * 中序遍历流程： 根节点 => 左子树 => 右子树
 */
function preOrder(node) {
    if (node !== null) {
        window.console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
                    `}
                />

                <p className="item-title">      
                    <span className="textShadow">遍历 ==> 后序遍历</span>
                </p>
                <Code 
                    code={`
/**
 * BST遍历之☞后序遍历
 * 中序遍历流程： 左子树 => 右子树 => 根节点
 */

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        window.console.log(node.show());
    }
}
                    `}
                />


                <p className="item-title">      
                    <span className="textShadow">获取最小的节点</span>
                </p>
                <Code 
                    code={`
/**
 * 获取最小的节点
 * 由于较小值在BST的左子树上，所以只需要遍历左子树即可
 */
function getMin() {
    let current = this.root;
    while(current.left != null) {
        current = current.left;
    }
    return current;
}
                    `}
                />


                <p className="item-title">      
                    <span className="textShadow">获取最大的节点</span>
                </p>
                <Code 
                    code={`
/**
 * 获取最大的节点
 * 由于较大值在BST的右子树上，所以只需要遍历右子树即可
 */

function getMax() {
    let current = this.root;
    while(current.right != null) {
        current = current.right;
    }
    return current;
}
                `}/>


                <p className="item-title">      
                    <span className="textShadow">在BST中查找给定值的节点</span>
                </p>
                <Code 
                    code={`
/**
 * 在BST中查找给定值的节点
 * @param {*} data 
 */
function find(data) {
    let current = this.root;
    while(current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}
                `}/>



                <p className="item-title">      
                    <span className="textShadow">在BST中删除指定节点</span>
                </p>
                <Code 
                    code={`
/**
 * 在BST中删除指定节点
 * 算法： 
 *     1. 判断当前节点是否包含待删除的数据，如果包含，则删除；如果不包含，则比较大小
 *     2. 如果待删除数据小于当前节点上的数据，则移至当前节点的左子节点继续比较；
 *     3. 如果待删除数据大于当前节点上的数据，则移至当前节点的右子节点继续比较；
 *     4. 如果待删除数据是叶子节点，只需将从父节点指向null
 * @param {*} data 
 */

function remove(data) {
    removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        //没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        const getSmallest = function(node) {
            if (node.left == null && node.right == null) {
                return node;
            }
            if (node.left != null) {
                return node.left;
            }
            if (node.right != null) {
                return getSmallest(node.right);
            }
        }
        // 有两个子节点的节点
        const tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
                `}/>


                <p className="item-title">      
                    <span className="textShadow">在BST中更新指定节点</span>
                </p>
                <Code 
                    code={`
function update(data) {
    const node = this.find(data);
    node.count++;
    return node;
}
                    `}/>


                <div className="line" />
                <p className="item-title">
                    <span className="textShadow">完整代码</span>
                </p>
                <Code 
                    code={`
 /**
 * 概念
 *      树：是一种非线性的数据结构，以分层的方式存储数据。树是由一组以边连接的节点组成。
 *      二叉树：是一种特殊的树，子节点不超过两个。
 *      二叉查找树：是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。
 * 特点： 在二叉树上查找，添加，删除元素非常快速
 */


/**
 * Node对象保存数据和其他节点的链接（left和right）
 * @param {*} data 数据
 * @param {*} left 左子节点
 * @param {*} right 右子节点
 */
 function Node(data, left, right) {
     this.data = data;
     this.left = left;
     this.right = right;
     this.show = show;
     this.count = 0;
 } 

 function show() {
     return this.data;
 }

/**
 * 实现二叉查找树类
 */
 function BST() {
     this.root = null;
     this.insert = insert;
     this.inOrder = inOrder;
     this.preOrder = preOrder;
     this.postOrder = postOrder;
     this.getMin = getMin;
     this.getMax = getMax;
     this.find = find;
     this.remove = remove;
     this.nodeCount = 0;
     this.update = update;
    //  this.getNodeCount = getNodeCount; //节点个数
 }

 /**
  * 插入节点方法
  * 算法：
  *     1. 设根节点为当前节点
  *     2. 如果待插入的节点的值小于当前节点，则设新的节点为原节点的左节点，反之为右节点
  *     3. 如果当前节点的左节点为null，就将新的节点插入该位置，循环退出，反之，继续下一次
  *     4. 设新的当前节点为原节点的右节点
  *     5. 如果当前节点的右节点为null，就将新的节点插入该位置，循环退出，反之，继续下一次
  * @param {*} data 
  */
 function insert(data) {
     const node = new Node(data, null, null);
     this.nodeCount += 1;
     if (this.root == null) {
         this.root = node;
     } else {
        let current = this.root;
        let parent;
        const bool = true;
        while(bool) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
     }
 }
/**
 * BST遍历之☞中序遍历
 * 中序遍历流程： 左子树 => 根节点 => 右子树
 */
 function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        window.console.log(node.show());
        inOrder(node.right);
    }
 }

 /**
 * BST遍历之☞先序遍历（前序）
 * 中序遍历流程： 根节点 => 左子树 => 右子树
 */
function preOrder(node) {
    if (node !== null) {
        window.console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
 }

 /**
 * BST遍历之☞后序遍历
 * 中序遍历流程： 左子树 => 右子树 => 根节点
 */
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        window.console.log(node.show());
    }
 }

/**
 * 获取最小的节点
 * 由于较小值在BST的左子树上，所以只需要遍历左子树即可
 */
 function getMin() {
    let current = this.root;
    while(current.left != null) {
        current = current.left;
    }
    return current;
 }

 /**
 * 获取最大的节点
 * 由于较大值在BST的右子树上，所以只需要遍历右子树即可
 */

 function getMax() {
     let current = this.root;
     while(current.right != null) {
         current = current.right;
     }
     return current;
 }

 /**
  * 在BST中查找给定值的节点
  * @param {*} data 
  */
 function find(data) {
    let current = this.root;
    while(current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
 }

 /**
  * 在BST中删除指定节点
  * 算法： 
  *     1. 判断当前节点是否包含待删除的数据，如果包含，则删除；如果不包含，则比较大小
  *     2. 如果待删除数据小于当前节点上的数据，则移至当前节点的左子节点继续比较；
  *     3. 如果待删除数据大于当前节点上的数据，则移至当前节点的右子节点继续比较；
  *     4. 如果待删除数据是叶子节点，只需将从父节点指向null
  * @param {*} data 
  */
function remove(data) {
    removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        //没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        const getSmallest = function(node) {
            if (node.left == null && node.right == null) {
                return node;
            }
            if (node.left != null) {
                return node.left;
            }
            if (node.right != null) {
                return getSmallest(node.right);
            }
        }
        // 有两个子节点的节点
        const tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

// //获取BST中所有节点（包括根节点）个数
// function getNodeCount() {
//     this.count = 0;
//     if (this.root !== null) {
//         inOrder(node.left);
//         console.log(node.show());
//         inOrder(node.right);
//     }
// }

function update(data) {
    const node = this.find(data);
    node.count++;
    return node;
}

export default BST;
                    `}
                />
            </div>
        )
    }
}
