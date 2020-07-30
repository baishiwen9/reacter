import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class AboutTree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">判断一棵树是否对称</span></p>
                <div className="article-desc">
                    先实现一个二叉查找树，然后进行判断是否为对称树。<br />
                    <Code code={`
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

/**
 * 二叉树： 每个节点的子节点不允许超过两个
 * 二叉查找树：是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.isSymmetry = isSymmetry;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert(data) {
    var node = new Node(data, null, null);
    if (this.root === null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent = null;
        while(true) {
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

function isSymmetry() {
    var root = this.root;
    if (root == null) {
        return true;
    }
    return compare(root.left, root.right);
}

function compare(left,right) {
    if (left == null && right == null) {
        return true;
    }
    if (left == null || right == null) {
        return false;
    }
    if (left.data !== right.data) {
        return false;
    }
    return compare(left.left, left.right) && compare(right.left, right.right);
}
// 中序遍历
// 左子树 ---> 根节点 ---> 右子树

function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node);
        inOrder(node.right);
    }
}

// 前序遍历
// 根节点 ---> 左子树 ---> 右子树
function preOrder(node) {
    if (node != null) {
        console.log(node);
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序遍历
// 左子树 ---> 右子树 ---> 根节点
function postOrder(node) {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node);
    }
}


// 获取最小值
// 最小值总是在左子节点上，只需要遍历左子树，直到找到最后一个节点

function getMin() {
    var currentRoot = this.root;
    while(currentRoot.left != null) {
        currentRoot = currentRoot.left;
    }
    return currentRoot.data;
}

// 获取最大值
// 最大值总是在右子节点上，只需要遍历右子树，直到找到最后一个节点
function getMax() {
    var currentRoot = this.root;
    while(currentRoot.right != null) {
        currentRoot = currentRoot.right;
    }
    return currentRoot.data;
}

// 查找指定的值
// 需要比较该值和当前节点的值的大小，小于则遍历左子树，大于则遍历右子树
function find(data) {
    var currentRoot = this.root;
    while(currentRoot != null) {
        if (currentRoot.data == data) {
            return currentRoot;
        } else if (currentRoot.data > data) {
            currentRoot = currentRoot.left;
        } else {
            currentRoot = currentRoot.right;
        }
    }
    return null;
}`} />
                </div>
            </div>
        )
    }
}